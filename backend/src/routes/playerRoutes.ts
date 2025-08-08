import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

interface CreatePlayerRequestBody {
  username: string;
  email: string;
  password: string;
}

interface LoginRequestBody {
  email: string;
  password: string;
}

// Controller function for creating player
const createPlayer = async (
  req: Request<{}, {}, CreatePlayerRequestBody>,
  res: Response
) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const player = await prisma.player.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: _, ...playerWithoutPassword } = player;

    res.json(playerWithoutPassword);
  } catch (e: any) {
    if (e.code === "P2002") {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
};

const loginPlayer = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    // Find player by email
    const player = await prisma.player.findUnique({
      where: { email },
    });

    if (!player) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(password, player.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Remove password before sending response
    const { password: _, ...playerWithoutPassword } = player;

    res.json(playerWithoutPassword);
  } catch (e) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

router.post("/", createPlayer);
router.post("/login", loginPlayer);

export default router;

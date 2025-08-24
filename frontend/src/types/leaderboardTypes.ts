export interface LeaderboardEntry {
  id: number;
  score: number;
  wpm: number;
  accuracy: number;
  player: { username: string };
}

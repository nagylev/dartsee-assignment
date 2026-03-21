import {
  GameTypeCountGroupRow,
  GameTypePlayCount,
} from 'src/types/games.types';

export function mapGameTypePlayCount(
  rows: GameTypeCountGroupRow[],
): GameTypePlayCount[] {
  const filteredRows = rows.filter(
    (row): row is GameTypeCountGroupRow & { type: string } => row.type !== null,
  );

  return filteredRows.map((row) => ({
    type: row.type,
    count: row._count.type,
  }));
}

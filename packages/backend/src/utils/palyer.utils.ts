import { players } from 'generated/prisma/client';
import { PlayerDto } from 'src/types/player.types';

export function mapPlayerToPlayerDto(player: players): PlayerDto {
  return {
    id: player.id,
    name: player.name ?? 'No name',
  };
}

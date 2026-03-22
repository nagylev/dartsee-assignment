import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination.tsx';

import { GamesPerPageSelect } from './GamesPerPageSelect.tsx';

interface GamesListPaginationProps {
  currentPage: number;
  totalPages: number;
  perPage: number;
}

export function GamesListPagination({
  currentPage,
  totalPages,
  perPage,
}: GamesListPaginationProps) {
  const GAMES_LIST_PATH = '/games/list';

  const onFirstPage = currentPage === 1;

  const secondPage = onFirstPage ? 2 : currentPage;

  const showLeadingEllipsis = currentPage > 2;
  const showLastLink = totalPages > secondPage;
  const showTrailingEllipsis = totalPages > secondPage + 1;
  const showSecondSlot = totalPages >= 2;

  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);

  const getSearchObject = (page: number) => ({ page, perPage });

  return (
    <div className="flex items-center justify-between">
      <GamesPerPageSelect perPage={perPage} />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={GAMES_LIST_PATH}
              search={getSearchObject(prevPage)}
              aria-disabled={currentPage <= 1}
              className={
                currentPage <= 1 ? 'pointer-events-none opacity-50' : undefined
              }
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={GAMES_LIST_PATH}
              search={getSearchObject(1)}
              isActive={onFirstPage}
            >
              1
            </PaginationLink>
          </PaginationItem>

          {showLeadingEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {showSecondSlot && (
            <PaginationItem>
              <PaginationLink
                href={GAMES_LIST_PATH}
                search={getSearchObject(secondPage)}
                isActive={!onFirstPage}
              >
                {secondPage}
              </PaginationLink>
            </PaginationItem>
          )}

          {showTrailingEllipsis && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {showLastLink && (
            <PaginationItem>
              <PaginationLink
                href={GAMES_LIST_PATH}
                search={getSearchObject(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationNext
              href={GAMES_LIST_PATH}
              search={getSearchObject(nextPage)}
              aria-disabled={currentPage >= totalPages}
              className={
                currentPage >= totalPages
                  ? 'pointer-events-none opacity-50'
                  : undefined
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

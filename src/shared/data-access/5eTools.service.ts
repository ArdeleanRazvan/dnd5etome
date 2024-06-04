import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Spellbook } from '../interfaces/spellbook';
import { EMPTY, catchError, exhaustMap, from, map, of } from 'rxjs';
import { SpellsResponse } from '../interfaces/spells-response';
import { BooksData } from '../interfaces/booksdata.interface';

@Injectable({
  providedIn: 'root',
})
export class FiveEToolsService {
  httpClient = inject(HttpClient);

  public requestSpellbooks() {
    /*return this.httpClient.get(`https://5e.tools/data/spells/index.json`).pipe(
      catchError((err) => {
        this.handleError(err);
        return EMPTY;
      }),
      map((response) => {
        const spellbooks: Spellbook[] = Object.entries(response).map(
          ([key, value]) => ({
            name: '',
            id: key,
            jsonFileName: value,
            spells: [],
            isSelected: false,
            isLoaded: false,
          }),
        );
        return spellbooks;
      }),
    );*/

    const spellbooks: Spellbook[] = [
      {
        name: "Player's Handbook",
        id: 'PHB',
        jsonFileName: 'spells-phb.json',
        spells: [],
        isSelected: false,
        isLoaded: false,
      },
    ];
    return of(spellbooks);
  }

  public requestGeneralBooksData() {
    return this.httpClient
      .get<BooksData>(
        'https://5e.tools/data/generated/gendata-nav-adventure-book-index.json',
      )
      .pipe(
        catchError((err) => {
          this.handleError(err);
          return EMPTY;
        }),
        map((response) => {
          return response.adventure.concat(response.book);
        }),
      );
  }

  public requestSpellsInBook(bookJson: string) {
    return this.httpClient
      .get<SpellsResponse>(`https://5e.tools/data/spells/${bookJson}`)
      .pipe(
        catchError((err) => {
          this.handleError(err);
          return EMPTY;
        }),
      );
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);

    //if (err.status === 404 && err.url) {
    //this.error$.next(`Failed to load gifs for /r/${err.url.split('/')[4]}`);
    //return;
    //}
    //this.error$.next(err.statusText);
  }
}

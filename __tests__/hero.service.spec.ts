
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';
import { HEROES } from 'src/app/mock-heroes';

// 外部モジュールのモック化
jest.mock('src/app/message.service');

describe('TestHeroService', () => {
    let heroService: HeroService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MessageService]
        });
        heroService = TestBed.inject(HeroService);
    });

    it('should be created', () => {
        expect(heroService).toBeTruthy();
    });

    describe('getHeroesメソッドのテスト', () => {
        it('モック用の配列を返却すること', () => {
            // 準備
            const expectedResult = HEROES;

            // 実行
            const result$ = heroService.getHeroes();

            // 検証
            result$.subscribe(result => {
                expect(result).toEqual(expectedResult);
            });
        });

        it('MessageServiceのaddメソッドを呼び出していること', () => {
            // 準備
            const messageService = TestBed.inject(MessageService);
            const spy = jest.spyOn(messageService, 'add');

            // 実行
            heroService.getHeroes();

            // 検証
            expect(spy).toBeCalled();
        });
    });
});

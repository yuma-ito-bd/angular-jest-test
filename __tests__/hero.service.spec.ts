
import { TestBed } from '@angular/core/testing';
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

    describe('テスト準備', () => {
        it('HeroServiceがインスタンス化されていること', () => {
            expect(heroService).not.toBeTruthy();
        });

        it('依存クラス（MessageService）がモック化されていること', () => {
            const mockedMessageService = TestBed.inject(MessageService) as jest.Mocked<MessageService>;
            expect(mockedMessageService.add.mock).toBeTruthy();
        });
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

            // 以下のようにspyすることも可能
            // const spy = jest.spyOn(MessageService.prototype, 'add');


            // 実行
            heroService.getHeroes();

            // 検証
            expect(spy).toBeCalled();
        });
    });
});

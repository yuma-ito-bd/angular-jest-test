import { TestBed } from '@angular/core/testing';
import { MessageService } from 'src/app/message.service';

describe('MessageServiceのテスト', () => {
    let messageService: MessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        messageService = TestBed.inject(MessageService);
    });

    it('インスタンス化されること', () => {
        expect(messageService).toBeTruthy();
    });

    it('初期化時はmessagesプロパティは空配列', () => {
        expect(messageService.messages).toEqual([]);
    });

    describe('addメソッド', () => {
        it('messagesプロパティに追加されるか', () => {
            // 準備
            const message = 'hello world.';

            // 実行
            messageService.add(message);

            // 検証
            expect(messageService.messages).toEqual([message]);
        });
        it('複数回追加した場合', () => {
            // 準備
            const message1 = 'hello';
            const message2 = 'world.';

            // 実行
            messageService.add(message1);
            messageService.add(message2);

            // 検証
            expect(messageService.messages).toEqual([message1, message2]);
        });
    });

    describe('clearメソッド', () => {
        it('messagesが空配列になるか', () => {
            // 準備
            messageService.messages = ['test', 'message'];

            // 実行
            messageService.clear();

            // 検証
            expect(messageService.messages).toEqual([]);
        });
    });
});

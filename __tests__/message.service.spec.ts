import { TestBed } from '@angular/core/testing';
import { MessageService } from 'src/app/message.service';

describe('MessageServiceのテスト', () => {
    let messageService: MessageService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
            ]
        });

        messageService = TestBed.inject(MessageService);
    });

    it('インスタンス化', () => {
        expect(messageService).toBeTruthy();
    });
});

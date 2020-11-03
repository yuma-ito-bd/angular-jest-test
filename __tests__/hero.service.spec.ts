
import { TestBed } from '@angular/core/testing';
import { HeroService } from 'src/app/hero.service';
import { MessageService } from 'src/app/message.service';

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
});

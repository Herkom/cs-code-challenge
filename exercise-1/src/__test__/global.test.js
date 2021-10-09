import { renderUsers, fetchData } from '../utils/usersRenderer';
import { displayMoreData } from '../utils/displayMoreData';

describe('User List test', ()=>{

    test('RenderUsers function is defined', ()=>{
        expect(renderUsers).toBeDefined()
    });

    test('FetchData function is defined', ()=>{
        expect(fetchData).toBeDefined()
    });

    test('DisplayMoreData function is defined', ()=>{
        expect(displayMoreData).toBeDefined()
    });

    it('FetchData returns an array', async ()=>{      
        fetch.once( ()=> fetchData().then( res => {
                expect(Array.isArray(res)).toBe(true)
            })
        );
    });

    it('RenderUsers returns a string', async ()=>{      
        fetch.once( ()=> renderUsers().then( res => {
                expect(typeof(res)).toBe('string')
            })
        );
    });

})

import moment from 'moment'
import { convertFormatDate } from './date'

describe('formatDate', () =>{
  test('should return format date', () => {
    const timestamp = '1595199245105'
    
    expect(convertFormatDate(+timestamp))
      .toEqual(moment(+timestamp).fromNow(true))
  })
})
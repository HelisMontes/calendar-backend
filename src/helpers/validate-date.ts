import moment from 'moment';

const isDate = (value: Date) => {
  if(!value) return false;
  return moment(value).isValid() ? true : false;
}
const isDateEnd = (value : Date, {req}) => {
  //console.log(req.body)
  if(!value) return false;
  if(!moment(value).isValid()) return false
  
  const dateStart:Date = moment(req.body.start).add(15, 'minutes').toDate(); 
  const dateEnd:Date = moment(value).toDate();
  /**
   * Validamos que la fecha final no sea menor o igual a la inicial
   * y debe haber una diferencia de 15 minutos entre fechas
   */
    return moment(dateEnd).isSameOrBefore(dateStart) ? false : true;
}
export { isDate, isDateEnd };
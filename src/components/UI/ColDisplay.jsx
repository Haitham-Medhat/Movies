
const style = { backgroundColor: '#313131', height: '2px' };

export default function ColDisplay({ header1, paragraph }) {


  return (
    <div className="col-md-4 d-flex align-items-center">
      <div style={{ color: 'white' }}>
        <div style={style} className=' my-3 w-25'></div>
        <h2 className='h4'>{header1}<br /><br />Right Now</h2>
        {paragraph ? <p className='text-muted py-1'>{paragraph}</p> : ''}
        <div style={style} className=' my-3'></div>
      </div>
    </div>
  );
}

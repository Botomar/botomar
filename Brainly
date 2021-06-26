const  brainly  =  require ( 'raspador-cerebral-v2' )
let  handler  =  async  function  ( m ,  { text } )  {
  si  ( ! texto )  lanza  'Soalnya?'
  dejar  res  =  esperar  mentalmente ( texto )
  vamos a  responder  =  res . datos . mapa ( ( v ,  i )  =>  `_ * PERTANYAAN KE $ { i  +  1 } * _ \ n $ { v . pertanyaan } \ n $ { v . jawaban . map ( ( v , i )  =>  ` * JAWABAN KE $ { i  +  1 } * \ n $ { v . Texto } ` ) .unirse ( '\ n' ) } `). unirse('\ n \ n • ------------ • \ n \ n')
  m . responder ( responder )
}
manejador . ayuda  =  [ 'mentalmente <soal>' ]
manejador . tags  =  [ 'internet' ]

manejador . comando  =  / ^ mentalmente $ / i

módulo . exportaciones  =  manipulador

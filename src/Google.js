let fetch = require ('búsqueda de nodo')
dejar googleIt = require ('google-it')
let handler = async (m, {conexión, comando, argumentos}) => {
  mar completo = / f $ / i. prueba (comando)
  let text = args. unirse ''
  if (! text) return conn. respondedor (m. chat, 'Tidak ada teks untuk di cari', m)
  let url = 'https://google.com/search?q=' + encodeURIComponent (texto)
  dejar buscar = esperar googleIt ({consulta: texto})
  deje msg = buscar. mapa (({título, enlace, fragmento}) => {
    return `* $ {título} * \ n_ $ {enlace} _ \ n_ $ {fragmento} _`
  }). unirse a `\ n \ n`
  dejar que ss = Await (lo esperan ir a buscar (mundial. API ('nrtm', '/ api / ssweb', {retraso: 1000, url, llena}))). búfer ()
  conn. sendFile (m. chat, ss, 'screenshot.png', url + '\ n \ n' + msg, m)
}
manejador. ayuda = ['google', 'googlef']. mapa (v => v + '<pencarian>')
manejador. tags = ['internet']
manejador. comando = / ^ googlef? $ / i
manejador. propietario = falso
manejador. mods = falso
manejador. prima = falso
manejador. grupo = falso
manejador. privado = falso

manejador. admin = falso
manejador. botAdmin = falso

manejador. falla = nulo
manejador. límite = verdadero

módulo. exportaciones = manipulador

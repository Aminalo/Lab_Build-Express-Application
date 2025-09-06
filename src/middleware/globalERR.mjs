export default function globalERR(err, req, res, next) {
  console.error('GLOBAL ERROR:', err?.stack || err?.message || err);
  const status = err?.status || 500;

  // Réponse simple JSON (on limite le nombre de vues à 4)
  res.status(status).json({
    message: err?.message || 'Internal Server Error'
  });
}
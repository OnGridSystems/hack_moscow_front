function cropTxnHash(hash, destLen) {
  if (typeof destLen !== 'number' || !destLen) return hash;
  const hashStr = `${hash}`;
  const newLen = parseInt(destLen, 10) - 4;

  if (!newLen || newLen <= 0 || destLen > hashStr.length) return hash;

  const arrHash = hashStr.split('');

  return [...arrHash.slice(0, newLen), ['...'], ...arrHash.slice(-4)].join('');
}

export default cropTxnHash;

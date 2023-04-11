export const getTransformParameters = (element: SVGSVGElement) => {
  const transform = element.style.transform;
  let scale = 1,
    x = 0,
    y = 0;

  if (transform.includes('scale')) scale = parseFloat(transform.slice(transform.indexOf('scale') + 6));
  if (transform.includes('translateX')) x = parseInt(transform.slice(transform.indexOf('translateX') + 11));
  if (transform.includes('translateY')) y = parseInt(transform.slice(transform.indexOf('translateY') + 11));

  return { scale, x, y };
};

export const getTransformString = (scale: number) => 'scale(' + scale + ')';

import { ViewBoxType } from 'Types/MapTypes';
import { MouseEvent, TouchEvent } from 'react';

export const getTransformParameters = (element: SVGSVGElement) => {
  const { transform } = element.style;
  let scale = 1,
    x = 0,
    y = 0;

  if (transform.includes('scale')) scale = parseFloat(transform.slice(transform.indexOf('scale') + 6));
  if (transform.includes('translateX')) x = parseInt(transform.slice(transform.indexOf('translateX') + 11));
  if (transform.includes('translateY')) y = parseInt(transform.slice(transform.indexOf('translateY') + 11));

  return { scale, x, y };
};

export const getTransformString = (scale?: number, x?: number, y?: number) => {
  const parts: string[] = [];

  scale && parts.push(`scale(${scale})`);
  x && parts.push(`translateX(${x})%`);
  y && parts.push(`translateY(${y})%`);

  return parts.join(' ');
};

const touchEvents = ['touchstart', 'touchend', 'touchmove'];
const checkIfIsTouchEvent = (event: MouseEvent | TouchEvent | WheelEvent): event is TouchEvent => touchEvents.includes(event.type);

export const getPointFromEvent = (e: MouseEvent | TouchEvent | WheelEvent) => {
  const point = { x: 0, y: 0 };

  if (checkIfIsTouchEvent(e)) {
    point.x = e.targetTouches[0].clientX;
    point.y = e.targetTouches[0].clientY;
  } else {
    point.x = e.clientX;
    point.y = e.clientY;
  }

  return point;
};

export const getViewBoxString = ({ x, y, height, width }: ViewBoxType): string => `${x} ${y} ${width} ${height}`;

import { HexColor } from './icons.types';

const ErrorIcon = ({ color = '#000' }: { color?: HexColor }) => {
  return (
    <svg
      fill={color}
      version="1.1"
      baseProfile="tiny"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-0.5 0.5 42 42"
      xmlSpace="preserve"
      width="2em"
      height="2em"
    >
      <path
        d="M29.582,8.683l-0.129,0.12L8.3,29.954c-0.249,0.249-0.428,0.478-0.547,0.688c-2.04-2.639-3.233-6-3.233-9.701
	c0-8.797,6.626-15.482,15.421-15.482C23.632,5.459,26.955,6.644,29.582,8.683z M10.937,33.704c0.189-0.117,0.388-0.287,0.606-0.507
	l21.151-21.151l0.041-0.04c1.74,2.518,2.746,5.602,2.746,8.994c0,8.785-6.696,15.541-15.481,15.541
	C16.568,36.541,13.454,35.506,10.937,33.704z M0.5,21c0,10.775,8.735,19.5,19.5,19.5c10.767,0,19.501-8.725,19.501-19.5
	c0-10.775-8.734-19.5-19.5-19.5C9.235,1.5,0.5,10.225,0.5,21z"
      />
    </svg>
  );
};

export default ErrorIcon;

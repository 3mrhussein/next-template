import { HexColor } from './icons.types';

const InfoIcon = ({ color = '#000' }: { color?: HexColor }) => {
  return (
    <svg width="2em" height="2em" fillOpacity={0} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default InfoIcon;

import PropTypes from 'prop-types'
import sprite from '../../../assets/images/sprite.svg'

export const Icon = (props) => {
    return (
      <svg
        width={props.width}
        height={props.height}
        viewBox={props.viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <use xlinkHref={`${sprite}#${props.iconId}`}></use>
      </svg>
    );
  };

  Icon.propsType = {
    width: PropTypes.string,
    height: PropTypes.string,
    viewBox:  PropTypes.string,
    iconId:  PropTypes.string,
  }

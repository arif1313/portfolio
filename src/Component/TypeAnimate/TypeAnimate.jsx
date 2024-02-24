import { TypeAnimation } from "react-type-animation";


const TypeAnimate = () => {
    return (
        <div>
  <TypeAnimation
    preRenderFirstString={true}
    sequence={[
      500,
      'I am a  Student of CSE', // initially rendered starting point
      1000,
      'I am a Marn-Stak Devloper',
      1000,
      'I am a softewer devloper',
      500,
      
    ]}
    speed={50}
    style={{ fontSize: '2em' }}
    repeat={Infinity}
  />
</div>
    );
};

export default TypeAnimate;
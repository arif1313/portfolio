import { TypeAnimation } from "react-type-animation";


const TypeAnimate = () => {
  return (
    <div className=" w-80">
      <TypeAnimation
        preRenderFirstString={true}
        sequence={[
          300,
          'CSE Graduate', // initially rendered starting point
          600,
          'Marn-Stak Devloper',
          1000,
          'App Developer',
          1000

        ]}
        speed={50}
        style={{ fontSize: '2em', color: "white" }}
        repeat={Infinity}

      />
    </div>
  );
};

export default TypeAnimate;
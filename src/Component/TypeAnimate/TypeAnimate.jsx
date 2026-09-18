import { TypeAnimation } from "react-type-animation";


const TypeAnimate = () => {
  return (
    <div className="w-full max-w-full overflow-hidden max-w-[1400px] mx-auto">
      <div className="min-h-[2.2em] text-left">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            300,
            'CSE Graduate',
            600,
            'Marn-Stak Devloper',
            1000,
            'App Developer',
            1000
          ]}
          speed={50}
          style={{
            fontSize: 'clamp(1.5rem, 6vw, 2em)',
            color: '#eefdf6',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            fontWeight: 600,
            letterSpacing: '0.02em'
          }}
          repeat={Infinity}
        />
      </div>

      <div className="mt-3 h-[3px] w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[62%] rounded-full bg-[#28e98c] shadow-[0_0_16px_rgba(40,233,140,0.9)] animate-pulse" />
      </div>
    </div>
  );
};

export default TypeAnimate;
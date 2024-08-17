import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './TiltCard.css'

const TiltCard = ({ job , profile , about , portfolio , name }) => {
    const tiltRef = useRef(null);

    useEffect(() => {
      const tiltNode = tiltRef.current;
      if (tiltNode) {
        VanillaTilt.init(tiltNode, {
          reverse :  true,
          max: 5,
          speed: 200,
          glare: true,
          'max-glare': .5,
        });
      }
  
      return () => {
        if (tiltNode && tiltNode.vanillaTilt) {
          tiltNode.vanillaTilt.destroy();
        }
      };
    }, []);

  return (
    		<div className='glassmorphic-card'  ref={tiltRef}>
    			<div className="imgBox">
    				<img src={profile} alt="" />
    			</div>
    			<div className={ `contentBox ${job}` } >
    				<h3> {name} </h3>
    				<p> {about} </p>
    				<a href={portfolio} ><span>درباره من</span></a>
    			</div>
    		</div>
  );
};

export default TiltCard;

import { performanceImages } from "../constants";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { performanceImgPositions } from '../constants';


const Performance = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Text animation
    gsap.fromTo('.content p', { opacity: 0, y: 20 }, { opacity: 1, y: 0, scrollTrigger: { trigger: '.content', start: 'top 80%', scrub: true } });

    // Image animations on desktop
    if (window.innerWidth > 1024) {
      const tl = gsap.timeline();

      performanceImgPositions.forEach(pos => {
        const el = `.${pos.id}`;
        gsap.set(el, { position: 'absolute', bottom: '-100%', opacity: 0 });

        const to = { opacity: 1, bottom: `${pos.bottom}%` };

        if (pos.left !== undefined) {
          gsap.set(el, { left: '-100%' });
          to.left = `${pos.left}%`;
        } else if (pos.right !== undefined) {
          gsap.set(el, { right: '-100%' });
          to.right = `${pos.right}%`;
        }

        tl.to(el, to, 0);
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        scrub: true,
        animation: tl,
      });
    }

    // Refresh on resize
    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="performance">
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper" style={{ position: 'relative' }}>
        { performanceImages.map(({id, src})=>(
            <img key={id} src={src} alt={id} className={id} />
        ))}
      </div>

      <div className="content">
        <p>
           Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games. 
        </p>
      </div>
    </section>
  );
};

export default Performance
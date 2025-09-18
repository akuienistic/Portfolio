import { Card } from "@/components/ui/card";
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

function CountUp({ end, inView, suffix = "" }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);
    let frame;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [inView, end]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const refInView = useInView(0.3);
  const ref = refInView[0];
  const inView = refInView[1];
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="grid grid-cols-2 gap-6 animate-scale-in">
      <Card className="p-6 text-center card-hover bg-card/50 backdrop-blur-sm border-primary/10">
        <div className="text-3xl font-bold text-primary mb-2">
          <CountUp end={3} inView={inView} suffix="+" />
        </div>
        <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
      </Card>
      <Card className="p-6 text-center card-hover bg-card/50 backdrop-blur-sm border-accent/10">
        <div className="text-3xl font-bold text-success mb-2">
          <CountUp end={50} inView={inView} suffix="+" />
        </div>
        <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
      </Card>
      <Card className="p-6 text-center card-hover bg-card/50 backdrop-blur-sm border-success/10">
        <div className="text-3xl font-bold text-success mb-2">
          <CountUp end={15} inView={inView} suffix="+" />
        </div>
        <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
      </Card>
      <Card className="p-6 text-center card-hover bg-card/50 backdrop-blur-sm border-primary/10">
        <div className="text-3xl font-bold text-primary mb-2">
          <CountUp end={90} inView={inView} suffix="%" />
        </div>
        <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
      </Card>
    </div>
  );
}

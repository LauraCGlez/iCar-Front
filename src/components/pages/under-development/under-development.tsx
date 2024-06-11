
import './under-development.css';
import UnderConstruction from '../../../assets/vectors/under-construction.tsx';

const UnderDevelopment = () => {
  return (
    <div className="under-development">
      <div className="under-development__card">
        <UnderConstruction className="under-development__construction-image"/>
        <h2 className="under-development__title">
          This section is currently undergoing development.
          <br />
          We'll be coming back soon!
        </h2>
      </div>
    </div>
  );
};

export default UnderDevelopment;
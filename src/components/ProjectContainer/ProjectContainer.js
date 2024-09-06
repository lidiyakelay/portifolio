import { useNavigate } from 'react-router-dom'; // Ensure this import is correct
import GitHubIcon from '@material-ui/icons/GitHub';
import './ProjectContainer.css';

const ProjectContainer = ({ project }) => {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className='project'
      role="button"
      tabIndex={0}
      onClick={handleContainerClick}  // Now the whole container is clickable
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleContainerClick();
        }
      }}
    >
      {project.image && (
        <div className='project__image-container'>
          <img
            src={project.image}
            alt={project.name}
            className='project__image'
          />
        </div>
      )}
      
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={item} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
          onClick={(e) => e.stopPropagation()} // Prevent the link click from navigating to the project detail page
        >
          <GitHubIcon />
        </a>
      )}
    </div>
  );
};

export default ProjectContainer;

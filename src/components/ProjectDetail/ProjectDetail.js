import { useParams, Link } from 'react-router-dom'; 
import { projects } from '../../portfolio'; // Adjust path if needed
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className='project-detail'>
      <h2>{project.name}</h2>
      {project.images && (
        <div className='project-detail__gallery'>
          {project.images.map((image) => (
            <img
              key={image.id} // Ensure images have a unique ID
              src={image.url}
              alt={`${project.name} screenshot`}
              className='project-detail__image'
            />
          ))}
        </div>
      )}
      <p>{project.description}</p>
      {/* Use Link to navigate back to the projects list */}
      <Link to='/' className='project-detail__back-link'>
        Back to Projects
      </Link>
    </div>
  );
};

export default ProjectDetail;

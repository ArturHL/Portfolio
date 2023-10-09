import {PropTypes} from 'prop-types'

WorkItem.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    skills: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired
}

function WorkItem({src, title, desc, skills, id}) {
  return (
    <>
        <div data-w-id="a14a47f4-0c97-4613-b94b-263fe176dfd6" role="listitem" className="w-dyn-item">
            <a href="/my-work/limbo-2" className="project-link w-inline-block">
                <div className="project-ordinal-number-wrapper">
                    <div className="standard-text black-50">0{id}</div>
                    <div className="hidden-view-detail">Click to see more</div>
                </div>
                <div className="thumbnail-wrapper">
                    <img loading="lazy" width="70" src={src} alt="" sizes="(max-width: 479px) 93vw, (max-width: 991px) 94vw, 51vw" className="thumbnail-image"/>
                </div>
                <div id="w-node-_08ffcba3-8f73-8808-834c-718d0caf914f-0aea9fee" className="project-intro-wrapper">
                    <div className="block-gap _8">
                        <h3>{title}</h3>
                        <div className="medium-text black-50">{desc}</div>
                    </div>
                    <div className="project-role-wrapper">
                        {skills.map((skill, index)=>{
                            return(
                                <div className="project-role-item" key={index}>{skill}</div>
                            )
                        })}
                    </div>
                </div>
            </a>
        </div>
    </>
  )
}

export default WorkItem
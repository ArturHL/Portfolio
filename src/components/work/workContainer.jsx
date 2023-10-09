import PropTypes from 'prop-types'
import WorkItem from './workItem'

Work.propTypes = {
    page: PropTypes.string.isRequired
}

function Work({page}) {
    const works = [
        {
            src: 'https://i.pinimg.com/564x/cb/10/fe/cb10fe147116d7e19dfd00ac102db10f.jpg',
            title: 'arturo',
            desc: 'klajsdflkjhal jfip woiflwa ehjkaw heohuwf',
            skills: ['react', 'node', 'express'],
            id: 1,
        },
        {
            src: 'https://i.pinimg.com/564x/cb/10/fe/cb10fe147116d7e19dfd00ac102db10f.jpg',
            title: 'arturo',
            desc: 'klajsdflkjhal jfip woiflwa ehjkaw heohuwf',
            skills: ['react', 'node', 'express'],
            id: 2,
        },
        {
            src: 'https://i.pinimg.com/564x/cb/10/fe/cb10fe147116d7e19dfd00ac102db10f.jpg',
            title: 'arturo',
            desc: 'klajsdflkjhal jfip woiflwa ehjkaw heohuwf',
            skills: ['react', 'node', 'express'],
            id: 3,
        },
        {
            src: 'https://i.pinimg.com/564x/cb/10/fe/cb10fe147116d7e19dfd00ac102db10f.jpg',
            title: 'arturo',
            desc: 'klajsdflkjhal jfip woiflwa ehjkaw heohuwf',
            skills: ['react', 'node', 'express'],
            id: 4,
        },
        {
            src: 'https://i.pinimg.com/564x/cb/10/fe/cb10fe147116d7e19dfd00ac102db10f.jpg',
            title: 'arturo',
            desc: 'klajsdflkjhal jfip woiflwa ehjkaw heohuwf',
            skills: ['react', 'node', 'express'],
            id: 5,
        },
    ]
  return (
    <>
        <section>
            <div className="container">
                {
                    page === 'Works'?<></>:<div data-w-id="00015707-c590-c23f-7dff-cf0b46747565" className="section-title-wrapper">
                                                <div className="divider"></div>
                                                <div className="section-title-text-wrapper">
                                                    <h2 className="section-heading">Featured Work</h2>
                                                    <div className="standard-text black-50">Since 2016</div>
                                                </div>
                                            </div>
                }
                
                <div className="w-dyn-list">
                    <div role="list" className="collection-list w-dyn-items">
                        {
                            page === 'Works'?
                                works.map((item)=>{
                                    return(<WorkItem src={item.src} title={item.title} desc={item.desc} skills={item.skills} key={item.id} id={item.id}/>)
                                })
                            :   works.slice(0,3).map((item)=>{
                                    return(<WorkItem src={item.src} title={item.title} desc={item.desc} skills={item.skills} key={item.id} id={item.id}/>)
                                })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Work
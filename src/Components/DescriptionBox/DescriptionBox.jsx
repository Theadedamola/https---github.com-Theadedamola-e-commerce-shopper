import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati
          cupiditate nisi pariatur rem quibusdam voluptas consequuntur minus
          doloremque, eveniet error maxime inventore voluptates, exercitationem
          delectus laudantium nulla, molestiae dolorum?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sunt
          accusantium dolorem culpa maiores at accusamus nihil sit iusto saepe.
        </p>
      </div>
    </div>
  )
}
export default DescriptionBox

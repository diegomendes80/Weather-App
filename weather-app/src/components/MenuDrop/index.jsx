import './index.scss';

export function MenuDrop({list, ...props}) {

    return (
    <nav className="menu">
      <input type="checkbox" id="menu-toggle" />

      <label htmlFor="menu-toggle" className="hamburger">
        ☰
      </label>

      <ul {...props}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
    )

}
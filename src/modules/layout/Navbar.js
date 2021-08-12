import { Component } from "react"
import Link from "next/link"

function MenuButton({ href, label }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 group">
      <Link href={href}>
        <div className="flex flex-col">
          <div className="flex flex-row text-5xl font-grotesk">{label}</div>
          <div className="flex w-0 h-1 transition-all bg-white group-hover:w-full" />
        </div>
      </Link>
    </div>
  )
}

class Menu extends Component {


  render() {
    return (
      <div className={`${this.props.isOpen ? "translate-x-0" : "translate-x-full"} flex z-20 overflow-y-scroll fixed bg-gray-800 text-white min-h-screen min-w-full justify-end flex-row items-center transition-all duration-500`}>
        <div className="flex flex-col items-center justify-center w-screen h-screen p-10">
          <MenuButton href='/' label="Home"/>
          <MenuButton href='/reservation' label="Reservation"/>
          <MenuButton href='/invites' label="Invites"/>
          <MenuButton href='/#about' label="About"/>
          <MenuButton href='/login' label="Login"/>
        </div>
      </div>
    )
  }
}

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
      open: false,
    }
    this.lastScrollY = 0;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open });
  }

  handleScroll(event) {
    if (this.state.open) {
      event.preventDefault();
    }
    const show = this.lastScrollY > window.scrollY || window.scrollY < (window.innerHeight / 4) || this.state.open;
    if (show != this.state.shown) this.setState({ shown: show });
    this.lastScrollY = window.scrollY;
  }


  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => this.setState({ shown: true }), 1000);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <>
        <div className={`${this.state.shown ? "translate-y-0" : "-translate-y-full"} fixed z-30 text-white flex flex-row items-center w-full p-10 transition-all duration-500`}>
          <div className="flex flex-row justify-start flex-1">
            <div className="flex text-4xl font-bold transition-all md:text-5xl font-grotesk hover:opacity-70">Jakarta</div>
          </div>
          <div className="flex flex-row justify-end flex-1">
            <button className={`hamburger hamburger--slider ${this.state.open ? "is-active" : ""}`} type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
        <Menu isOpen={this.state.open} />
      </>
    );
  }
}

export default Navbar;
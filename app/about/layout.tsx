import About from '@/components/about'

export default function Layout(props:{children: React.ReactNode}){
    return (
      <>
        {/* <p>페이지 레이아웃</p> */}
        {props.children}
      </>
    )
  }
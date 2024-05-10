

import styles from './Button.module.css'

const styleMapped = {
    viewProducts : styles.viewProduct,
}

const Typography = ({children,
  components='button'

}) => {

 
  const Wrapper = components;
  const varient = styleMapped.viewProducts

  return (
    <Wrapper className={[varient].join(' ')}>
        {children}
    </Wrapper>
  )
}


export default Typography

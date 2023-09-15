type PropsType = {
        pageTitle: string,
        children: React.ReactNode,
};

const GenericPage = ({ pageTitle, children }: PropsType) => {
  return (
        <section className='gen-page'>
                <h1 className='gen-page-header'>{pageTitle}</h1>
                <section className='gen-page-child'>{children}</section>
        </section>
  )
}

export default GenericPage;

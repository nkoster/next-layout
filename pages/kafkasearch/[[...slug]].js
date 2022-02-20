import {useRouter} from 'next/router'

const SlugPage = () => {

  const router = useRouter()

  return (
    <div>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </div>
  )
}

export default SlugPage

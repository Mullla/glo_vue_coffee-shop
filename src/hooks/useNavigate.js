import { useRouter } from 'vue-router'

export const useNavigate = () => {
  const router = useRouter()

  const navigate = (name, id) => {
    router.push({ name, params: { id } })
  }

  return {
    navigate
  }
}

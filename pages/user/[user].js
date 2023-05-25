export default function User() {
    const router = useRouter();
    const data = router.query.apartment;
    console.log(data);
}
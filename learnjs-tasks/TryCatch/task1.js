async function demoGithubUser() {
    let user;
    while (!user) {
        try {
            let name = prompt('Введите логин?', 'iliakan');
            user = await loadJson(`https://api.github.com/users/${name}`);
            await alert(`Полное имя: ${user.name}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status === 404) {
                alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
            } else {
                throw err;
            }
        }
    }
}
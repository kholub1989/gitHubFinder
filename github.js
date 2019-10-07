class Github {
  constructor() {
    this.client_id = 'ca9f302bce4226dedfae';
    this.client_secret = '67e04b33754dee72395b0350bdadc642d903dbae';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}
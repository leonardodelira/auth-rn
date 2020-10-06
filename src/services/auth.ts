interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'da0s9duja0s0dasd091i2312nfpjff',
        user: {
          name: 'Leonardo Lira',
          email: 'leonardo.lira@teste.com',
        },
      });
    }, 2000);
  });
}

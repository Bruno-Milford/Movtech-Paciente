export class Patient {
  codPaciente: string;
  nomePaciente: string;
  sexoPaciente: string;
  dataNascimento: string;
  nomeMaePaciente: string;
  cpfPaciente: string;
  rgPaciente: string;
  cns: string;
  corPaciente: string;
  nacionalidade: string;
  naturalidade: string;
  grauInstrucaoPaciente: string;
  profissaoPaciente: string;
  responsavelPaciente: string;
  cep: string;
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  telefone: string;
  celular: string;
  contato: string;
  telefoneContato: string;
  email: string;
  observacao: string;

  constructor(codPaciente: string, nomePaciente: string, sexoPaciente: string, dataNascimento: string, nomeMaePaciente: string,
    cpfPaciente: string, rgPaciente: string, cns: string, corPaciente: string, nacionalidade: string, naturalidade: string,
    grauInstrucaoPaciente: string, profissaoPaciente: string, responsavelPaciente: string, cep: string, endereco: string,
    bairro: string, cidade: string, uf: string, telefone: string, celular: string, contato: string, telefoneContato: string,
    email: string, observacao: string) {

    this.codPaciente = codPaciente;
    this.nomePaciente = nomePaciente;
    this.sexoPaciente = sexoPaciente;
    this.dataNascimento = dataNascimento;
    this.nomeMaePaciente = nomeMaePaciente;
    this.cpfPaciente = cpfPaciente;
    this.rgPaciente = rgPaciente;
    this.cns = cns;
    this.corPaciente = corPaciente;
    this.nacionalidade = nacionalidade;
    this.naturalidade = naturalidade;
    this.grauInstrucaoPaciente = grauInstrucaoPaciente;
    this.profissaoPaciente = profissaoPaciente;
    this.responsavelPaciente = responsavelPaciente;
    this.cep = cep;
    this.endereco = endereco;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.telefone = telefone;
    this.celular = celular;
    this.contato = contato;
    this.telefoneContato = telefoneContato;
    this.email = email;
    this.observacao = observacao;
  }
}

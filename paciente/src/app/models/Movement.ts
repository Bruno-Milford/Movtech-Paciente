export class Movement {
  codMovimentacao: number;
  codInternacao: number;
  codSequencia: number;
  nomePacienteMov: string;
  dataMovimentacao: Date;
  motivo: string;
  localizacao: string;
  leitoMov: string;
  centroCustoMov: string;
  medicoMov: string;
  crmMov: string;

  constructor(codMovimentacao: number, codInternacao: number, codSequencia: number, nomePacienteMov: string,
    dataMovimentacao: Date, motivo: string, localizacao: string,
    leitoMov: string, centroCustoMov: string, medicoMov: string, crmMov: string) {
      this.codMovimentacao = codMovimentacao;
      this.codInternacao = codInternacao;
      this.codSequencia = codSequencia;
      this.nomePacienteMov = nomePacienteMov;
      this.dataMovimentacao = dataMovimentacao;
      this.motivo = motivo;
      this.localizacao = localizacao;
      this.leitoMov = leitoMov;
      this.centroCustoMov = centroCustoMov;
      this.medicoMov = medicoMov;
      this.crmMov = crmMov;
  }
}

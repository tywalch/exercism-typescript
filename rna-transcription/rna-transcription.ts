type RNA = "C" | "G" | "A" | "U"
type DNA = "G" | "C" | "T" | "A"

const DNA_RNA: Record<DNA, RNA> = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
};

class Transcriptor {
    isDNA(nucleotide: string): nucleotide is DNA {
        return nucleotide in DNA_RNA;
    }
    toRna( sequence: string ): string {
        let rna = "";
        for (let nucleotide of sequence) {
            if (this.isDNA(nucleotide)) {
                rna += DNA_RNA[nucleotide];
            } else {
                throw new Error("Invalid input DNA.");
            }
        }
        return rna;
    }
}

export default Transcriptor
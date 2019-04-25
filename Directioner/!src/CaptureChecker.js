export default class CaptureChecker {
    static check(captureConf, endPiece, pieceSide) {
        if (captureConf == null) {
            if (endPiece != null
                && endPiece.side == pieceSide) {
                    return "cannot capture own piece"
            }

            return ""
        }   

        if (captureConf == false) {
            if (endPiece != null) {
                return "cannot capture"
            }

            return ""
        }

        if (captureConf == true) {
            if (endPiece == null) {
                return "no piece to capture"
            }

            if (endPiece.side == pieceSide) {
                return "cannot capture own piece"
            }
        }

        return "programming error: all values checked"
    }
}
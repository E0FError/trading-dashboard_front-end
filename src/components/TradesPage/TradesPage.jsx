import { useSelector } from "react-redux";
import { selectTradesData, selectShowTrades } from "../../redux/tradesSlice";
import {
  selectApiStatus,
  selectAutoTradingStatus
} from "../../redux/statusSlice";
import {
  Button,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  statusDot: {
    display: "inline-block",
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    borderRadius: "50%",
    marginRight: theme.spacing(1),
    verticalAlign: "middle"
  },
  green: {
    backgroundColor: "green"
  },
  red: {
    backgroundColor: "red"
  }
}));

function TradesPage() {
  const tradesData = useSelector(selectTradesData);
  const showTrades = useSelector(selectShowTrades);
  const apiStatus = useSelector(selectApiStatus);
  const autoTradingStatus = useSelector(selectAutoTradingStatus);
  const classes = useStyles();

  if (!showTrades) return null;

  return (
    <Container>
      <Typography>© TWS API connected</Typography>
      <Typography>• Auto-trading is On</Typography>
      <Button variant="contained" color="primary">
        Sell All Positions
      </Button>
      <Button variant="contained" color="secondary">
        Cancel All Open Orders
      </Button>
      <Button variant="contained">Data Dump</Button>
      <Typography>Total: 163</Typography>
      <Typography>Live: 8</Typography>
      <Typography>Win: 34 (26.6%)</Typography>
      <Typography>Loss: 86 (67.2%)</Typography>
      <Typography>Cancelled: 35</Typography>
      <Typography>PnL -0.21%</Typography>
      <Typography>P&L -$897.31</Typography>

      <Typography variant="h6" gutterBottom>
        Active Positions
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>FilledBuyQty</TableCell>
              <TableCell>AvgBuyPrice</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>% PnL</TableCell>
              <TableCell>$ PnL</TableCell>
              <TableCell>Commissions</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Sample Row */}
            <TableRow>
              <TableCell>DIS [view]</TableCell>
              <TableCell>Active</TableCell>
              <TableCell>28</TableCell>
              <TableCell>88.63</TableCell>
              <TableCell>10951.93</TableCell>
              <TableCell>0.58</TableCell>
              <TableCell>14.28</TableCell>
              <TableCell>0.38</TableCell>
              <TableCell>2481.64</TableCell>
              <TableCell>2023-06-26 07:15:32</TableCell>
              <TableCell>sell mrk or forget</TableCell>
            </TableRow>
            {/* ... Add more rows as needed */}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h6" gutterBottom>
        Closed Positions
      </Typography>
      {/* ... Another Table for Closed Positions, similar to the Active Positions */}
    </Container>
  );
}

export default TradesPage;

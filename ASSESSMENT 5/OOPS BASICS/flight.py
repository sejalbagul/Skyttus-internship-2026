# FLIGHT CLASS WITH SEAT BOOKING FUNCTIONALITY
class Flight:
    def __init__(self, seats):
        self.seats = seats
        self.booked = 0

    def book_seat(self):
        if self.booked <self.seats:
            self.booked += 1
            print(f"Seat booked ! Available : {self.seats - self.booked}")
        else:
            print("Flight is full !")

flight = Flight(50)
flight.book_seat()
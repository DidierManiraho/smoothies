
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://klibeixofimiimsnxidd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsaWJlaXhvZmltaWltc254aWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU2MTk1MDEsImV4cCI6MTk4MTE5NTUwMX0.9QPUyIcSO7ZDfAcLXZ5NxTzkJyW2WIvHCCKaPhqWU38'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
